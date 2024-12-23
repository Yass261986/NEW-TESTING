"use strict";

function FlipImageData(e, t, s) {
    const r = 4 * t,
        o = new Uint8Array(r),
        n = e.buffer;
    for (let e = 0, t = Math.floor(s / 2); e < t; ++e) {
        const a = s - e - 1,
            l = new Uint8Array(n, e * r, r),
            f = new Uint8Array(n, a * r, r);
        o.set(l), l.set(f), f.set(o)
    }
}

function UnpremultiplyImageData(s) {
    for (let e = 0, t = s.length; e < t; e += 4) {
        const r = s[e + 3];
        if (255 !== r) {
            const o = 255 / r;
            s[e] *= o, s[e + 1] *= o, s[e + 2] *= o
        }
    }
}

function SendReady() {
    self.dispatchPort.postMessage({
        "type": "ready"
    }), self.outputPort.postMessage({
        "type": "ready"
    })
}

function SendError(e, t) {
    e || self.outputPort.postMessage({
        "type": "error",
        "jobId": self.activeJobId,
        "error": t.toString()
    }), SendDone()
}

function SendResult(e, t) {
    if (!e) {
        const s = t.transferables || [];
        self.outputPort.postMessage({
            "type": "result",
            "jobId": self.activeJobId,
            "result": t.result
        }, s)
    }
    SendDone()
}

function SendDone() {
    self.activeJobId = null, self.dispatchPort.postMessage({
        "type": "done"
    })
}

function SendProgress(e) {
    self.outputPort.postMessage({
        "type": "progress",
        "jobId": self.activeJobId,
        "progress": e
    })
}

function OnDispatchWorkerMessage(t) {
    const s = t.data,
        r = s["type"];
    if ("_import_scripts" === r) importScripts(...s["scripts"]);
    else if ("_send_blob" === r) self.sentBlobs.set(s["id"], s["blob"]);
    else if ("_send_buffer" === r) self.sentBuffers.set(s["id"], s["buffer"]);
    else if ("_ready" === r) SendReady();
    else {
        const o = s["jobId"],
            n = s["isBroadcast"],
            a = s["params"];
        let e;
        if (self.activeJobId = o, self.JobHandlers.hasOwnProperty(r)) {
            try {
                e = self.JobHandlers[r](a)
            } catch (t) {
                return void SendError(n, "Exception in job handler: " + t)
            }
            e && e.then ? e.then(e => SendResult(n, e)).catch(e => SendError(n, "Rejection in job handler: " + e)) : SendResult(n, e)
        } else console.error(`no handler for message type '${r}'`)
    }
}
self.dispatchPort = null, self.outputPort = null, self.workerNumber = -1, self.activeJobId = null, self.sentBlobs = new Map, self.sentBuffers = new Map, self.JobHandlers = {}, self.JobHandlers["ProcessImageData"] = function(e) {
    const t = e["buffer"],
        s = new Uint8Array(t),
        r = e["width"],
        o = e["height"];
    return e["flipY"] && FlipImageData(s, r, o), e["unpremultiply"] && UnpremultiplyImageData(s), {
        result: t,
        transferables: [t]
    }
}, self.addEventListener("message", e => {
    const t = e.data,
        s = t["type"];
    switch (s) {
        case "init":
            return self.workerNumber = t["number"], self.dispatchPort = t["dispatch-port"], self.dispatchPort.onmessage = OnDispatchWorkerMessage, void(self.outputPort = t["output-port"]);
        case "terminate":
            return void self.close();
        default:
            return void console.error("unknown message '" + s + "'")
    }
});
const C3 = self.C3;
self.C3_GetObjectRefTable = function() {
    return [
        C3.Plugins.Sprite,
        C3.Behaviors.DragnDrop,
        C3.Behaviors.bound,
        C3.Plugins.Touch,
        C3.Behaviors.Tween,
        C3.Plugins.Audio,
        C3.Plugins.TiledBg,
        C3.Plugins.Text,
        C3.Behaviors.Sin,
        C3.Plugins.System.Cnds.IsGroupActive,
        C3.Plugins.System.Cnds.OnLayoutStart,
        C3.Plugins.System.Acts.SetVar,
        C3.Plugins.System.Exps.layoutname,
        C3.Plugins.System.Acts.SetBoolVar,
        C3.Plugins.Sprite.Acts.SetInstanceVar,
        C3.Plugins.Sprite.Exps.X,
        C3.Plugins.Sprite.Exps.Y,
        C3.Plugins.Sprite.Acts.SetPos,
        C3.Plugins.System.Exps.viewportleft,
        C3.Plugins.System.Exps.viewporttop,
        C3.Plugins.System.Exps.viewportright,
        C3.Behaviors.Tween.Acts.TweenTwoProperties,
        C3.Plugins.Audio.Acts.Stop,
        C3.Plugins.System.Cnds.CompareVar,
        C3.Plugins.System.Acts.SetGroupActive,
        C3.Plugins.Touch.Cnds.OnTouchObject,
        C3.Plugins.Audio.Acts.StopAll,
        C3.Plugins.Audio.Acts.Play,
        C3.Plugins.System.Acts.GoToLayout,
        C3.Plugins.System.Acts.RestartLayout,
        C3.Plugins.System.Cnds.EveryTick,
        C3.Plugins.System.Exps.min,
        C3.Plugins.System.Exps.dt,
        C3.Plugins.Sprite.Acts.SetMeshSize,
        C3.Plugins.System.Cnds.Repeat,
        C3.Plugins.Sprite.Acts.SetMeshPoint,
        C3.Plugins.System.Exps.loopindex,
        C3.Plugins.System.Cnds.Every,
        C3.Plugins.System.Acts.AddVar,
        C3.Plugins.System.Cnds.TriggerOnce,
        C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
        C3.Plugins.Sprite.Cnds.CompareInstanceVar,
        C3.Plugins.Sprite.Acts.SetAnim,
        C3.Behaviors.DragnDrop.Cnds.IsDragging,
        C3.Plugins.Sprite.Acts.MoveToTop,
        C3.Plugins.Sprite.Cnds.IsOverlapping,
        C3.Plugins.Sprite.Cnds.PickDistance,
        C3.Plugins.Sprite.Acts.SetAnimFrame,
        C3.Plugins.System.Cnds.ForEach,
        C3.Behaviors.DragnDrop.Cnds.OnDrop,
        C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
        C3.Behaviors.DragnDrop.Acts.SetEnabled,
        C3.Plugins.Sprite.Acts.SetVisible,
        C3.Plugins.System.Acts.CreateObjectByName,
        C3.Plugins.System.Acts.CreateObject,
        C3.Plugins.Sprite.Acts.Spawn,
        C3.Plugins.Sprite.Exps.AnimationFrame,
        C3.Plugins.Sprite.Acts.Destroy,
        C3.Plugins.TiledBg.Acts.SetSize,
        C3.Plugins.System.Exps.viewportwidth,
        C3.Plugins.System.Exps.viewportheight,
        C3.Plugins.System.Cnds.CompareBoolVar,
        C3.Behaviors.Tween.Cnds.OnTweensFinished,
        C3.Plugins.TiledBg.Acts.SetVisible,
        C3.Plugins.Sprite.Cnds.IsVisible,
        C3.Plugins.Sprite.Acts.SetSize,
        C3.Plugins.TiledBg.Acts.SetWidth,
        C3.Plugins.TiledBg.Exps.Width,
        C3.Plugins.Sprite.Exps.Width,
        C3.Plugins.Text.Acts.SetText,
        C3.Plugins.System.Exps.int
    ];
};
self.C3_JsPropNameTable = [{
        Active: 0
    },
    {
        Character: 0
    },
    {
        Touched: 0
    },
    {
        StartX: 0
    },
    {
        StartY: 0
    },
    {
        DragDrop: 0
    },
    {
        BoundToLayout: 0
    },
    {
        Icon_Drag: 0
    },
    {
        Button_Close: 0
    },
    {
        Sound_1_Orange: 0
    },
    {
        Sound_1_Navi: 0
    },
    {
        Sound_1_Red: 0
    },
    {
        Sound_1_Pink: 0
    },
    {
        Sound_1_Ufo: 0
    },
    {
        Sound_1_White: 0
    },
    {
        Sound_1_Robot: 0
    },
    {
        Default_1: 0
    },
    {
        Touch: 0
    },
    {
        IconShadow: 0
    },
    {
        Stage_1: 0
    },
    {
        Stage_2: 0
    },
    {
        Tween: 0
    },
    {
        Speaker: 0
    },
    {
        Button_Refresh: 0
    },
    {
        Button_Back: 0
    },
    {
        Icon_3: 0
    },
    {
        Logo: 0
    },
    {
        Audio: 0
    },
    {
        Sound_1_Pc: 0
    },
    {
        Sound_1_Green: 0
    },
    {
        Sound_1_Hat: 0
    },
    {
        Sound_1_Grey: 0
    },
    {
        Sound_1_Yellow: 0
    },
    {
        Sound_1_Brown: 0
    },
    {
        Sound_1_Tree: 0
    },
    {
        Sound_1_Pin: 0
    },
    {
        Sound_1_Purple: 0
    },
    {
        Sound_1_Mint: 0
    },
    {
        Sound_1_Sun: 0
    },
    {
        Sound_1_Blue: 0
    },
    {
        Board: 0
    },
    {
        Discoball: 0
    },
    {
        Effect: 0
    },
    {
        Discoball_rope: 0
    },
    {
        Bg_Shadow: 0
    },
    {
        Background: 0
    },
    {
        Grass_2: 0
    },
    {
        Grass_1: 0
    },
    {
        Eye: 0
    },
    {
        Default_2: 0
    },
    {
        City: 0
    },
    {
        Moon: 0
    },
    {
        Brickwall_1: 0
    },
    {
        Brickwall_2: 0
    },
    {
        Beach: 0
    },
    {
        Boat: 0
    },
    {
        Icon_4: 0
    },
    {
        Icon_1: 0
    },
    {
        Icon_2: 0
    },
    {
        Sound_2_Orange: 0
    },
    {
        Sound_2_Navi: 0
    },
    {
        Sound_2_Red: 0
    },
    {
        Sound_2_Pink: 0
    },
    {
        Sound_2_Ufo: 0
    },
    {
        Sound_2_White: 0
    },
    {
        Sound_2_Robot: 0
    },
    {
        Sound_2_Pc: 0
    },
    {
        Sound_2_Green: 0
    },
    {
        Sound_2_Hat: 0
    },
    {
        Sound_2_Grey: 0
    },
    {
        Sound_2_Yellow: 0
    },
    {
        Sound_2_Brown: 0
    },
    {
        Sound_2_Tree: 0
    },
    {
        Sound_2_Pin: 0
    },
    {
        Sound_2_Purple: 0
    },
    {
        Sound_2_Mint: 0
    },
    {
        Sound_2_Sun: 0
    },
    {
        Sound_2_Blue: 0
    },
    {
        Bg: 0
    },
    {
        Bar_Background: 0
    },
    {
        Bar_Fill: 0
    },
    {
        Text: 0
    },
    {
        Circular_Bar: 0
    },
    {
        Sine: 0
    },
    {
        Eye_Close: 0
    },
    {
        Button_Tutorial: 0
    },
    {
        Sprite: 0
    },
    {
        Tutorial: 0
    },
    {
        TiledBackground: 0
    },
    {
        CurrentLevel: 0
    },
    {
        BeatTimer: 0
    },
    {
        CurrentSound: 0
    },
    {
        a: 0
    },
    {
        z: 0
    },
    {
        Speed: 0
    },
    {
        progress: 0
    },
    {
        Loading_Progress: 0
    }
];

self.InstanceType = {
    Icon_Drag: class extends self.ISpriteInstance {},
    Button_Close: class extends self.ISpriteInstance {},
    Sound_1_Orange: class extends self.ISpriteInstance {},
    Sound_1_Navi: class extends self.ISpriteInstance {},
    Sound_1_Red: class extends self.ISpriteInstance {},
    Sound_1_Pink: class extends self.ISpriteInstance {},
    Sound_1_Ufo: class extends self.ISpriteInstance {},
    Sound_1_White: class extends self.ISpriteInstance {},
    Sound_1_Robot: class extends self.ISpriteInstance {},
    Default_1: class extends self.ISpriteInstance {},
    Touch: class extends self.IInstance {},
    IconShadow: class extends self.ISpriteInstance {},
    Stage_1: class extends self.ISpriteInstance {},
    Stage_2: class extends self.ISpriteInstance {},
    Speaker: class extends self.ISpriteInstance {},
    Button_Refresh: class extends self.ISpriteInstance {},
    Button_Back: class extends self.ISpriteInstance {},
    Icon_3: class extends self.ISpriteInstance {},
    Logo: class extends self.ISpriteInstance {},
    Audio: class extends self.IInstance {},
    Sound_1_Pc: class extends self.ISpriteInstance {},
    Sound_1_Green: class extends self.ISpriteInstance {},
    Sound_1_Hat: class extends self.ISpriteInstance {},
    Sound_1_Grey: class extends self.ISpriteInstance {},
    Sound_1_Yellow: class extends self.ISpriteInstance {},
    Sound_1_Brown: class extends self.ISpriteInstance {},
    Sound_1_Tree: class extends self.ISpriteInstance {},
    Sound_1_Pin: class extends self.ISpriteInstance {},
    Sound_1_Purple: class extends self.ISpriteInstance {},
    Sound_1_Mint: class extends self.ISpriteInstance {},
    Sound_1_Sun: class extends self.ISpriteInstance {},
    Sound_1_Blue: class extends self.ISpriteInstance {},
    Board: class extends self.ISpriteInstance {},
    Discoball: class extends self.ISpriteInstance {},
    Effect: class extends self.ISpriteInstance {},
    Discoball_rope: class extends self.ISpriteInstance {},
    Bg_Shadow: class extends self.ISpriteInstance {},
    Background: class extends self.ISpriteInstance {},
    Grass_2: class extends self.ISpriteInstance {},
    Grass_1: class extends self.ISpriteInstance {},
    Eye: class extends self.ISpriteInstance {},
    Default_2: class extends self.ISpriteInstance {},
    City: class extends self.ISpriteInstance {},
    Moon: class extends self.ISpriteInstance {},
    Brickwall_1: class extends self.ISpriteInstance {},
    Brickwall_2: class extends self.ISpriteInstance {},
    Beach: class extends self.ISpriteInstance {},
    Boat: class extends self.ISpriteInstance {},
    Icon_4: class extends self.ISpriteInstance {},
    Icon_1: class extends self.ISpriteInstance {},
    Icon_2: class extends self.ISpriteInstance {},
    Sound_2_Orange: class extends self.ISpriteInstance {},
    Sound_2_Navi: class extends self.ISpriteInstance {},
    Sound_2_Red: class extends self.ISpriteInstance {},
    Sound_2_Pink: class extends self.ISpriteInstance {},
    Sound_2_Ufo: class extends self.ISpriteInstance {},
    Sound_2_White: class extends self.ISpriteInstance {},
    Sound_2_Robot: class extends self.ISpriteInstance {},
    Sound_2_Pc: class extends self.ISpriteInstance {},
    Sound_2_Green: class extends self.ISpriteInstance {},
    Sound_2_Hat: class extends self.ISpriteInstance {},
    Sound_2_Grey: class extends self.ISpriteInstance {},
    Sound_2_Yellow: class extends self.ISpriteInstance {},
    Sound_2_Brown: class extends self.ISpriteInstance {},
    Sound_2_Tree: class extends self.ISpriteInstance {},
    Sound_2_Pin: class extends self.ISpriteInstance {},
    Sound_2_Purple: class extends self.ISpriteInstance {},
    Sound_2_Mint: class extends self.ISpriteInstance {},
    Sound_2_Sun: class extends self.ISpriteInstance {},
    Sound_2_Blue: class extends self.ISpriteInstance {},
    Bg: class extends self.ISpriteInstance {},
    Bar_Background: class extends self.ISpriteInstance {},
    Bar_Fill: class extends self.ITiledBackgroundInstance {},
    Text: class extends self.ITextInstance {},
    Circular_Bar: class extends self.ISpriteInstance {},
    Eye_Close: class extends self.ISpriteInstance {},
    Button_Tutorial: class extends self.ISpriteInstance {},
    Sprite: class extends self.ISpriteInstance {},
    Tutorial: class extends self.ISpriteInstance {},
    TiledBackground: class extends self.ITiledBackgroundInstance {}
}
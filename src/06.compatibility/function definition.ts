/**
 * 这个代码学习到的更多的是函数的写法，而不是兼不兼容。 
 */
namespace a {

    enum EventType { Mouse, Keyboard }

    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
        /* ... */
    }

    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));

    /**
     * 注意这里的handler的写法。
     * (e: Event) => void 这个函数的定义被当成类型，强制转换后边的（）。 
     */
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    //listenEvent(EventType.Mouse, (e: number) => console.log(e));
}
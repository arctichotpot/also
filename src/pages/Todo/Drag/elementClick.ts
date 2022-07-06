

export function listenClick(el: HTMLElement, callback: (result: boolean) => void) {

    const bodyDom = document.querySelector('body');
    const clickEvent = 'click';


    bodyDom?.addEventListener(clickEvent, (e) => {
        const result = el.contains(e.target as HTMLElement);
        callback(result);

        if (!result) {
            bodyDom?.removeEventListener(clickEvent, () => { });
        }
    });
}   
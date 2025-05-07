export function useMouseCoordinates(){
    const x = ref(0);
    const y = ref(0);
    const coordinates = {x,y}
    const handler = event => {
        x.value = event.x
        y.value = event.y
    }
    if (import.meta.server) return coordinates;
    useEventListener(document,"mousemove", handler)
    return coordinates;
}
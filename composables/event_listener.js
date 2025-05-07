export function useEventListener(target, type, handler, options){
    if(import.meta.server) return;
    onMounted(() => target.addEventListener(type,handler,options))
    onUnmounted(() => target.removeEventListener(type,handler,options))
}
// $lib/actions/clickOutside.js
export function clickOutside(node) {
  const handle = (e) => {
    if (!node.contains(e.target))
      node.dispatchEvent(new CustomEvent("outclick"));
  };
  document.addEventListener("click", handle);
  return { destroy: () => document.removeEventListener("click", handle) };
}

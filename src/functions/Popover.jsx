import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export function initPopovers() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(popoverTriggerEl => {
    new bootstrap.Popover(popoverTriggerEl);
  });
}

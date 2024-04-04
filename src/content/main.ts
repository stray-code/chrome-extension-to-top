import van from "vanjs-core";
import "./style.css";

const arrow = chrome.runtime.getURL("img/arrow.svg");

const Observer = (() => {
  const { div } = van.tags;

  return div();
})();

document.body.prepend(Observer);

const useIsShow = () => {
  const isShow = van.state(false);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isShow.val = !entry.isIntersecting;
      });
    },
    {
      rootMargin: "1000px 0px 0px 0px",
    },
  );

  observer.observe(Observer);

  return {
    isShow,
  };
};

const ToTopButton = () => {
  const { button, img } = van.tags;
  const { isShow } = useIsShow();

  return button(
    {
      type: "button",
      onclick: () => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      },
      class: "chrome-extension-to-top",
      "data-is-show": isShow,
    },
    img({ src: arrow }),
  );
};

document.body.appendChild(ToTopButton());

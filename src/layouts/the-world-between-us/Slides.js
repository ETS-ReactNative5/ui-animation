const createEleWithClass = (tag, className) => {
  const ele = document.createElement(tag);
  ele.className = className;
  return ele;
};

class Slides {
  constructor(data) {
    this.data = data;
    this.container = createEleWithClass("div", "slides");
    this.currentIdx = 0;
    this.slides = this.data.map((entry, index) => {
      const slide = createEleWithClass("div", "slide");
      const title = createEleWithClass("h1", "slide-title");
      const meta = createEleWithClass("p", "slide-meta");
      const mention = createEleWithClass("p", "slide-mention");

      slide.classList.add(index !== 0 ? "next" : "show-meta");
      
      meta.innerHTML = entry.meta;
      title.innerHTML = entry.title;
      mention.innerHTML = entry.mention;
      slide.appendChild(meta);
      slide.appendChild(title);
      slide.appendChild(mention);
      this.container.appendChild(slide);
      return slide;
    });
  }
  mount(container) {
    container.appendChild(this.container);
  }
  onActiveIndexChange(activeIndex) {
    this.currentIdx = activeIndex;
    for (let i = 0; i < this.slides.length; i++) {
      if (activeIndex === i) {
        this.slides[i].classList.remove("next");
        this.slides[i].classList.remove("prev");
        this.slides[i].classList.add("show-mention");        
        let video = document.getElementById(`video-${activeIndex}`);
        if (video) {
          video.play();
        }
        
      } else {
        if (activeIndex > i) {
          this.slides[i].classList.remove("next");
          this.slides[i].classList.add("prev");
          this.slides[i].classList.remove("show-mention");
        } else {
          this.slides[i].classList.add("next");
          this.slides[i].classList.remove("prev");
          this.slides[i].classList.remove("show-mention");
        }
        let video = document.getElementById(`video-${i}`);
        if (video) {
          video.pause();
        }
      }
    }
  }
  onMove(indexFloat) {
    this.container.style.transform = `translateY(${(indexFloat * 100) /
      this.slides.length}%)`;
  }
  appear() {
    this.container.classList.add("scrolling");
    this.slides[this.currentIdx].classList.remove("show-meta");
    this.slides[this.currentIdx].classList.add("show-mention");
  }
  disperse(activeIndex) {
    //this.currentIdx = activeIndex;
    this.slides[this.currentIdx].classList.add("show-meta");
    this.slides[this.currentIdx].classList.remove("show-mention");
    this.container.classList.remove("scrolling");
    for (let index = 0; index < this.data.length; index++) {
      if (index > activeIndex) {
        this.slides[index].classList.add("next");
        this.slides[index].classList.remove("prev");
      } else if (index < activeIndex) {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.add("prev");
      } else {
        this.slides[index].classList.remove("next");
        this.slides[index].classList.remove("prev");
      }
    }
  }
}

export { Slides };

class navber extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <nav>
              <div class="logo">
              <img
                  src="https://patiphannn.com/wp-content/uploads/2021/03/8cbdbc5bc595431c851b631363dc0161.png"
                  alt="" />
              </div>
              <div class="navbar">
                  <ul>
  
                      <li><a href="../page/index.html" class="">home</a></li>
                      <li><a href="../page/about.html">about</a></li>
                      <li><a href="">blog</a></li>
                      <li><a href="">Courses</a></li>
                  </ul>
              </div>
          </nav>
          `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
        <div class="container">
          <div class="footer">
            <div class="footer_ontop">
              <div class="footer-rowleft col-5">
                <div class="logo">
                  <img
                    src="https://patiphannn.com/wp-content/uploads/2021/03/8cbdbc5bc595431c851b631363dc0161.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Wizard of the future</p>
                  <h1>patiphannn.com</h1>
                </div>
              </div>
              <div class="footer-rowright col-5">
                <div class="social">
                  <div>
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div>
                    <i class="fab fa-github"></i>
                  </div>
                  <div>
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div>
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div>
                    <i class="fab fa-facebook-square"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="footer_buttom">
              <div class="col-6">@ 2021 krerkpon All hight</div>
              <div class="col-6">
                <ul>
                  <li>
                    <a href="">Buy Chanp domin</a>
                  </li>
                  <li>
                    <a href="">Group</a>
                  </li>
                  <li>
                    <a href="">contect</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>`;
  }
}

const template = document.createElement("template");
template.innerHTML = `
 <style>
  
.content {
  display: flex;
  margin-top: 4rem;
}
.blog_row_1 {
  display: flex;
}
.blog_content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.img_blog img {
  width: 100%;
  height: 90%;
  border-radius: 25px;
  padding: 15px;
}
.blog_logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.icon_profile {
  display: flex;
  margin-top: 2rem;
}
.icon_profile .name {
  color: #0080ff;
}
.short_desc {
  color: #6c7a87;
}
 </style>
		<div class="col-6 img_blog">
            <img id="img-blog"
              src=""/>
          </div>
          <div class="col-6">
            <div class="icon_profile">
              <div class="blog_logo">
			  	<img src="" id="avatar"/>
				</div>
              <div>
                <div class="name" id="blog-name"></div>
                <div class="date" id="blog-date"></div>
              </div>
            </div>
            <div class="body_blog">
              <h5 class="title_blog">
                <a
                  href="https://patiphannn.com/10-javascript-influencers-2021/"
                  rel="bookmark"
                  ><slot name="title-blog"/></a
                >
              </h5>
              <p class="short_desc">
                <slot name="text-blog"/>
              </p>
            </div>
        </div>
		`;

class blog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("img-blog").src = document.getElementById(
      "post_img"
    ).src;
    this.shadowRoot.getElementById("avatar").src = this.getAttribute("avatar");
    this.shadowRoot.getElementById("blog-name").innerText = this.getAttribute(
      "name"
    );
    this.shadowRoot.getElementById("blog-date").innerText = this.getAttribute(
      "date"
    );
  }
}

window.customElements.define("main-blog", blog);

customElements.define("main-navber", navber);
customElements.define("main-footer", Footer);

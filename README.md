# ggContentMenu
jQuery plugin ggContentMenu v1.0 -developed by GGaritaJ: Gerardo Garita-

Plugin based on jquery that allows you to add an interactive slider-type menu, and allow the mobility through the websites and guide the user.

Usage:
´´´html
<ul id="myMenu" class="ggContentMenu">
      <li>
          <a href="#" tabindex="1">
              <span class="glyphicon glyphicon-menu-hamburger"></span>
          </a>
          <div class="contentMenu first">
              <ul>

                  <li menu-level="1">
                      <a tabindex="2">
                          <span>LISTA POR DEFECTO</span>
                      </a>
                      <div class="contentMenu">
                          <ul>
                              <li menu-level="2">
                                  <a href="#">Lista 1</a>
                              </li>
                              <li menu-level="2">
                                  <a href="#">Lista 2</a>
                              </li>
                              <li menu-level="2">
                                  <a href="#">Lista 3</a>
                              </li>
                              <li menu-level="2">
                                  <a href="#">Lista 4</a>
                              </li>
                          </ul>
                      </div>
                  </li>

              </ul>
          </div>
      </li>
  </ul>
´´´
´´´javascript
$("ul#myMenu").ggContentMenu({
    top: 50, //nav var
    bottom: 40 //footer
});
´´´

Online example: https://jsfiddle.net/GGaritaJ/y63ez7vc/17/

More info: www.ggaritaj.com info@ggaritaj.com

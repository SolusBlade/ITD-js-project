!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequire810f;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire810f=a),a("iE7OH").register(JSON.parse('{"27uyE":"cocktails.27e69f2e.js","410VS":"icons.5e4a2d51.svg"}'));var i,o=a("bpxeT"),c=a("2TvXO"),s=a("dIxxU"),u=a("fqZse"),l=a("5RN7g");i=a("aNJCr").getBundleURL("27uyE")+a("iE7OH").resolve("410VS");var f=new(0,u.default),d=document.querySelector(".favorite-cocktails__list"),p=document.querySelector(".favorite-ingredients__list");function v(){d.insertAdjacentHTML("beforebegin",'<p class="favorite-cocktails__text">\n          You haven\'t added any favorite cocktails yet\n        </p>')}function _(t){return h.apply(this,arguments)}function h(){return(h=t(o)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.default.get("".concat(l.default,"lookup.php?i=").concat(n));case 3:return r=t.sent.data,t.abrupt("return",r.drinks[0]);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(){return b=t(o)(t(c).mark((function e(){var n,r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.cocktails,e.next=4,Promise.all(n.map(function(){var e=t(o)(t(c).mark((function e(n){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return r=e.sent,f.cocktails||v(),e.abrupt("return",m(r));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),b.apply(this,arguments)}function g(t){var e=t.target.dataset.id;f.cocktails.includes(e)?f.removeCocktail(e):f.cocktails||v()}function m(t){var e=t.map((function(t){return'<li class="favorite-cocktails__item">\n            <img class="favorite-cocktails__item-img" src="'.concat(t.strDrinkThumb,'" alt="" />\n            <div class="favorite-cocktails__item-container">\n              <h2 class="favorite-cocktails__item-title">').concat(t.strDrink,'</h2>\n              <div class="favorite-button-container">\n                <button type="button" data-type="open-learn-more" class="favorite-button__learn-more">\n                  Learn more\n                </button>\n                <button type="button" data-id="').concat(t.idDrink,'" class="favorite-button__remove">\n                  Remove\n                  <svg class="favorite-button__icon" width="17" height="15">\n                    <use href="').concat(i,'#icon-full-heart"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n          </li>\n    ')})).join("");d.insertAdjacentHTML("beforeend",e),document.querySelector(".favorite-cocktails").addEventListener("click",g)}function k(){return k=t(o)(t(c).mark((function e(){var n,r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.ingredients,e.next=4,Promise.all(n.map(function(){var e=t(o)(t(c).mark((function e(n){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return r=e.sent,f.ingredients||v(),e.abrupt("return",y(r));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),k.apply(this,arguments)}function y(t){var e=t.map((function(t){return'<li class="favorite-ingredients__item">\n            <h2 class="favorite-ingredients__item-title">'.concat(t.strDrink,'</h2>\n            <p class="favorite-ingredients__item-text">Liqueur</p>\n            <div class="favorite-button-container">\n              <button type="button" class="favorite-button__learn-more">\n                Learn more\n              </button>\n              <button type="button" class="favorite-button__remove">\n                Remove\n                <svg class="favorite-button__icon" width="17" height="15">\n                  <use href="./images/icons.svg#icon-full-heart"></use>\n                </svg>\n              </button>\n            </div>\n          </li>\n  ')})).join("");p&&p.insertAdjacentHTML("beforeend",e);var n=document.querySelector(".favorite-cocktails");n&&n.addEventListener("click",g)}0===f.cocktails.length&&v(),function(){b.apply(this,arguments)}(),0===f.ingredients.length&&p.insertAdjacentHTML("beforbegin",'  <p class="favorite-ingredients__text">\n          You haven\'t added any favorite ingridients yet\n      </p>'),function(){k.apply(this,arguments)}()}();
//# sourceMappingURL=cocktails.27e69f2e.js.map

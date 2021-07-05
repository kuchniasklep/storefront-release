export class FacebookTracker {
  constructor(ids) {
    const id_array = ids.split(", ");
    this.pixel = new Promise(resolve => {
      // @ts-ignore
      !function (f, b, e, v, n, t, s) {
        if (f.fbq)
          return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq)
          f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      id_array.forEach(id => {
        fbq('init', id);
      });
      resolve(fbq);
    });
  }
  pageview() {
    this.pixel.then(fbq => {
      fbq('track', 'PageView');
    });
  }
  product(productId, name, price, currency) {
    fbq('track', "ViewContent", {
      content_type: 'product',
      content_name: name,
      value: price,
      currency: currency,
      content_ids: [productId]
    });
  }
  addToCart(productId, name, price, quantity, currency) {
    fbq('track', 'AddToCart', {
      content_type: 'product',
      content_name: name,
      value: price,
      currency: currency,
      contents: [
        { id: productId, quantity: quantity }
      ]
    });
  }
  order_checkout(products, value, currency) {
    this.pixel.then(fbq => {
      fbq('track', "InitiateCheckout", {
        contents: this.transformProducts(products),
        value: value,
        currency: currency
      });
    });
  }
  // @ts-ignore
  order_form(products, value, currency) {
  }
  order_placed(products, value, currency) {
    fbq('track', 'Purchase', {
      contents: this.transformProducts(products),
      content_type: 'product',
      value: value,
      currency: currency
    });
  }
  search(query) {
    this.pixel.then(fbq => {
      fbq('track', "Search", {
        search_string: query
      });
    });
  }
  transformProducts(products) {
    return products.map(product => {
      return {
        id: product.id,
        quantity: product.quantity
      };
    });
  }
}

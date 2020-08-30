import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "extend-for-membership-indicator",
  initialize() {
    withPluginApi("0.8.10", api => {
      api.decorateWidget('post-avatar:after', helper => {
        let imgs = helper.getModel().membership_indicator.split(',');
        for(var i=0; i<imgs.length; i++) {
          imgs[i] = helper.rawHtml('<img style="width: 45px;" src="' + imgs[i] + '">');
        }
        if (imgs.length > 0) {
          return helper.h('span', imgs);
        } else {
          return '';
        }
      });
    });
  }
}


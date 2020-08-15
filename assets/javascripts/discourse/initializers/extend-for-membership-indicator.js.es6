import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "extend-for-membership-indicator",
  initialize() {
    withPluginApi("0.8.10", api => {
      api.decorateWidget('post-avatar:after', helper => {
        let img = helper.getModel().samegroup;
        if(img) {
            return helper.rawHtml('<img style="width: 45px;" src="' + img + '">');
        } else {
            return '';
        }
      });
    });
  }
}


# name: discourse-membership-indicator
# about: Indicate members of a group to other members of that group
# version: 0.1
# required_version: 2.4.0
# author: DiscourseHosting
# url: https://github.com/discoursehosting/discourse-membership-indicator

enabled_site_setting :membership_indicator_enabled

after_initialize do
  add_to_serializer(:post, :samegroup) do
    sg = nil 
    if scope.user && object.user && (scope.user.id != object.user.id)
      common_groups = SiteSetting.membership_indicator_groups.split('|').map(&:to_i) & scope.user.groups.pluck(:id) & object.user.groups.pluck(:id)
      if common_groups.count > 0
        sg = Group.find(common_groups[0]).flair_upload.url
      end
    end
    sg
  end
end

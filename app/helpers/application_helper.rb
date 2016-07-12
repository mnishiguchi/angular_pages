module ApplicationHelper

  def angular_page?
    controller.controller_name == 'angular_pages'
  end
end

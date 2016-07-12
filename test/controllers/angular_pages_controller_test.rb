require 'test_helper'

class AngularPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get angular_pages_index_url
    assert_response :success
  end

end

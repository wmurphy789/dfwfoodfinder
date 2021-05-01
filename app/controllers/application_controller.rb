class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?
  helper_method :current_vendor, :logged_vendor_in?

  def current_user
    return nil unless session[:session_token]
    @current_user = User.find_by(session_token: session[:session_token])
    return @current_user
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.session_token
    @current_user = user
    return session[:session_token]
  end

  def logout!
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
    end
  end

  def current_vendor
    return nil unless session[:session_token]
    @current_vendor = Vendor.find_by(session_token: session[:session_token])
    return @current_vendor
  end

  def logged_vendor_in?
    !!current_vendor
  end

  def login_vendor!(user)
    session[:session_token] = user.session_token
    @current_vendor = user
    return session[:session_token]
  end

  def logout_vendor!
    if logged_vendor_in?
      current_vendor.reset_session_token!
      session[:session_token] = nil
    end
  end
end

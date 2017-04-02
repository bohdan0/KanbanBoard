class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user

  def root
  end

  def current_session
    @current_session ||= Session.find_by_session_token(session[:session_token])
  end

  def current_user
    if current_session
      @current_user ||= current_session.user
    else
      nil
    end
  end

  def log_in(user)
    if session[:session_token]
      @current_session = Session.find_or_create_by(session_token: session[:session_token], user: user)
    else
      session[:session_token] = Session.log_in(user)
    end
    @current_user = user
  end

  def log_out
    Session.log_out(current_session)
    session[:session_token] = nil
    @current_user = nil
  end
end

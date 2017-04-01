class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password])

    if @user
      log_in(@user)
      render json: @user.to_json(only: [:id, :username, :password_digest]), status: 200
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      log_out
      render json: @user.to_json(only: [:id, :username, :password_digest]), status: 200
    else
      render json: ['You are not logged in'], status: 401
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end

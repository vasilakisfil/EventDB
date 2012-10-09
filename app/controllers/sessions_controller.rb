class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:session][:useremail].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in user
      redirect_back_or user
    else
      user = User.find_by_username(params[:session][:useremail])
      if user && user.authenticate(params[:session][:password])
        sign_in user
        redirect_back_or user
      else
        flash.now[:error] = 'Invalid email/username and password combination' 
        render 'new'
      end
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end

end

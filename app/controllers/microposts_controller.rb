class MicropostsController < ApplicationController
  before_filter :signed_in_user, only: [:create, :destroy]

  def create
    @micropost = current_user.microposts.build(params[:micropost])
    if @micropost.save
      flash[:success] = "Micropost created!"
      redirect_to user_path(current_user)
    else
      @user = User.find(current_user)
      @microposts = @user.microposts.paginate(page: params[:page])
      #flash.now[:errors] = @micropost.errors.full_messages
      render 'users/show'
      #redirect_to user_path(current_user)
    end
  end

  def destroy
  end
end

class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user 
            sign_in!(@user)
            render "api/users/show"
        else 
            render json: ["Invalid username and/or password"], status: 422
        end
    end

    def destroy 
        if current_user
            sign_out!()
            render json: ["You have logged out."]
        else 
            render json: ["Nobody is signed in."], status: 404
        end
    end
end

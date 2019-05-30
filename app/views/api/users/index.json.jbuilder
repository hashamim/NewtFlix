json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :profile, :email, :password_digest, :session_token
        end
    end
end
json.current_user current_user
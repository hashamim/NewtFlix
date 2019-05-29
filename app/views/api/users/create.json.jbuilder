json.user do
    json.extract! @user, :id, :profile, :email
end

json.session do
    json.id @user.id
end
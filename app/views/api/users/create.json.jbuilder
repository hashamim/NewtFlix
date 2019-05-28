json.entities do
    json.user do
        json.extract! @user, :id, :profile
    end
end

json.session do
    json.id @user.id
end
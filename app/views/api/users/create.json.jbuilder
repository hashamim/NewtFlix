json.user do
    json.extract! @user, :id, :profile, :email
    json.showIds @user.shows.pluck(:id)
end

json.session do
    json.id @user.id
end
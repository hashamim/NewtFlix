json.user do
    json.extract! @user, :id, :profile, :email,
    json.show_ids @user.shows.pluck(:id)
end

json.session do
    json.id @user.id
end
# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  show_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :user_id, uniqueness: {scope: :show_id}
  belongs_to :user
  belongs_to :show

end

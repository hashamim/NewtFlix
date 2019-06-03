# == Schema Information
#
# Table name: castings
#
#  id         :bigint           not null, primary key
#  show_id    :bigint
#  actor_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Casting < ApplicationRecord
  belongs_to :show
  belongs_to :actor
end

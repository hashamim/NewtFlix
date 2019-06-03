# == Schema Information
#
# Table name: actors
#
#  id   :bigint           not null, primary key
#  name :string           not null
#

class Actor < ApplicationRecord
    has_many :castings
    has_many :shows, through: :castings 
end

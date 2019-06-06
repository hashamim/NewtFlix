# == Schema Information
#
# Table name: shows
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  year            :integer          not null
#  maturity_rating :string           not null
#  description     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Show < ApplicationRecord
    validates :year, :maturity_rating, :description, presence: true
    validates :title, presence: true, uniqueness: true

    has_many :show_genres
    has_many :genres, through: :show_genres
    has_many :castings
    has_many :actors, through: :castings 
    has_one_attached :title_card
    has_one_attached :video
end

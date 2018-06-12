class User < ApplicationRecord
  has_many :contacts
  has_many :groups

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  validates :name, presence: true
end

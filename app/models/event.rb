class Event < ActiveRecord::Base
  validates :organizer_name, presence: true
  validates :title, presence: true
  validates :title, uniqueness: true
  validates_format_of :organizer_email, :with => /\w+@\w+\.\w+/
  validates_format_of :date, :with => /\d{4}-\d{1,2}-\d{1,2}/

end

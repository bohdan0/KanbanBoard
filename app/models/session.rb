class Session < ApplicationRecord
  validates :user, :session_token, presence: true
  validates :session_token, uniqueness: true

  belongs_to :user

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def self.log_out(session_token)
    find(session_token: session_token).destroy
  end

  def ensure_session_token
    self.session_token ||= Session.generate_session_token
  end
end
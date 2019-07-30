# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#

class User < ApplicationRecord 
    validates :email, :fname, :lname, :password_digest, :session_token, presence: true 
    validates :password, length: {minimum: 8}, allow_nil: true 

    attr_reader :password 
    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user && user.valid_password?(password)
        user
    end

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def reset_session_token 
        self.session_token = User.generate_session_token 
        save! 
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end

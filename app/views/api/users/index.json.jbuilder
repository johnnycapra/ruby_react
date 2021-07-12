@users.each do |user|
    json.set! user.id do 
        json.extract! user, :name, :email, :id
    end
end
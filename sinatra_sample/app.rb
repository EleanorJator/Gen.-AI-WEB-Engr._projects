require "sinatra"

get '/' do
    return erb :index 
end

get '/index' do
    return "<h1>hello sinatra</h1>" 
end

get '/jn' do
 " hello Jed"
end 

post '/create' do
    "#{params}" 
end
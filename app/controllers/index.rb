get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
  
  erb :new_event
end

post '/events/create' do
  p params
  @event = Event.new(params)
  if @event.save
    redirect "/events/#{@event.id}/show"
  end
  @errors = true
  @title = @event.title
  @organizer_name = @event.organizer_name
  @organizer_email = @event.organizer_email
  @date = @event.date
  puts @date
  erb :new_event
end

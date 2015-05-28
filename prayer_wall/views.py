from django.shortcuts import render_to_response
from django.shortcuts import render
from models import PrayerRequest
from django.template import RequestContext, Context, Template



def home(request):
    if request.method == 'GET':
        prayer_requests = []
        for a in PrayerRequest.objects.all() :
            prayer_requests.append(a.request)
        context = {'prayer_requests':prayer_requests}
        # fetch from data from db, give it to frontend
        # return Template('../templates/prayer_wall.html').render(context)
        # return render_to_response('../templates/prayer_wall.html', RequestContext(request))
        return render(request, 'prayer_wall.html', context)
    elif request.method == 'POST':
        prayerRequest = unicode(request.POST['prayer-request'])
        name = ''
        email = ''
        if 'prayer-name' in request.POST:
            name = unicode(request.POST['prayer-name'])
        if 'prayer-email' in request.POST:
            email = unicode(request.POST['prayer-email'])
        req = PrayerRequest(name=name, email=email, request=prayerRequest, count=0)
        req.save()
        prayer_requests = []
        for a in PrayerRequest.objects.all() :
            prayer_requests.append(a.request)

        #print "-----------------------"
        #print PrayerRequest.objects.all()
        context = {'prayer_requests':prayer_requests}
        return render(request, 'prayer_wall.html', context)
        # return Template('../templates/prayer_wall.html').render(context)

from django.shortcuts import render_to_response
from django.shortcuts import render
from models import PrayerRequest
from django.template import RequestContext, Context, Template
from django.core import serializers
from django.http import JsonResponse,HttpResponse
import json

def home(request):
    return render(request, 'prayer_wall.html')

def prayer_requests(request):
    if request.method == 'GET':
        all_prayer_request = serializers.serialize("json", PrayerRequest.objects.all().order_by("timestamp").reverse())
        return HttpResponse(all_prayer_request)
    elif request.method == 'POST':
        print "test1"
        requestInfo = json.loads(request.body)
        prayerRequest = requestInfo.get("prayer_request")
        name = requestInfo.get("name")
        email = requestInfo.get("email")
        req = PrayerRequest(name=name, email=email, request=prayerRequest, count=0)
        req.save()
        all_prayer_request = serializers.serialize("json", PrayerRequest.objects.all())
        return HttpResponse(all_prayer_request)
    elif request.method == 'PUT':
        print "put"
        requestInfo = json.loads(request.body)
        prayerRequestID = requestInfo.get("id")
        target = PrayerRequest.objects.get(pk=prayerRequestID)
        target.count+=1
        target.save()
        all_prayer_request = serializers.serialize("json", PrayerRequest.objects.all())
        return HttpResponse(all_prayer_request)

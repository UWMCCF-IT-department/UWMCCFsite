from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'UWMCCFsite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    
    url(r'^index', 'prayer_wall.views.home' ),
    url(r'^api_v1/prayer-requests', 'prayer_wall.views.prayer_requests' ),
)

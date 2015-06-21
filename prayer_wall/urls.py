from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'UWMCCFsite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    
    url(r'^$', TemplateView.as_view(template_name='prayer_wall.html') ),
    url(r'^api_v1/prayer-requests', 'prayer_wall.views.prayer_requests' ),
)

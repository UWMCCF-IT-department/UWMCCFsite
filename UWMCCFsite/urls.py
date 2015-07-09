from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'UWMCCFsite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),   
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^news/', TemplateView.as_view(template_name='news.html')),
    url(r'^events/', TemplateView.as_view(template_name='events.html')),
    url(r'^prayer_wall/', include('prayer_wall.urls')), 
    url(r'^pathway/', TemplateView.as_view(template_name='pathway.html')),
    url(r'^about_us/', TemplateView.as_view(template_name='about_us.html')),
    url(r'^mccfer/', TemplateView.as_view(template_name='mccfer.html')),
)

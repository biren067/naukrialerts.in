
from django.urls import path,include
from . import views as api_views
# from .views import post
# from rest_framework.routers import DefaultRouter

# postRouter = DefaultRouter()
# postRouter.register(r'post', post, basename='post')

# urlpatterns = postRouter.urls
urlpatterns = [
    # path('', include(postRouter.urls)),       # Include post URLs
    # path('', include(comments_router.urls)),   # Include comments URLs
    path('post/',api_views.JobPost.as_view()),
    # path('post/<advno:str>/',api_views.JobPost.as_view()), # Include post
    path('getadvno/<str:adv_no>/',api_views.getAdvNo),
    path('getjobdetails/<str:link_post_name>/',api_views.getJobDetails),
    path('getjobdetailspk/<int:pk>/',api_views.getJobDetailsPk),
    
    path('getjobinfo/',api_views.getJobInfo),
    # path('getjobinfo/<int:pk>',api_views.getJobInfoPk),
    # path('getjobinfo/<str:link_post_name>/',api_views.getJobInfo),
    # getJobInfo?state=central
    # path('getjobinfolist/<str:link_post_name>/',api_views.getJobInfo),
]

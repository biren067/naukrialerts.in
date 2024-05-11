
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
    # path('storerandom/',api_views.storeRandom),
    path('storejobrandom/<int:records>',api_views.storeJobRandom),
    # API: based on pagination + state + categories ( pagination+state+categories)
    path('getstateandcategory/',api_views.getStateAndCategory),
    # api for state and category and pagination
    path('getstateandcategorypaginations/',api_views.getStateAndCategoryPaginations) # DOND
    # http://localhost:8000/api/getstateandcategorypaginations?pagenumber=2&pageSize=3
]

# ======= More research on results and admit card ===========
# ======= More research on Job posting page =================
# Three API is required job + state + category + pagination
# === 1. Job + state + category + pagination ======================================= COMPLETED
# === 2. Results + state + category + pagination
# === 3. admin_card + state + category + pagination
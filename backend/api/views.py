from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
# {"title":"ada 2023","post_name":"bank PO"}

def commonResponse(data,status_code=status.HTTP_200_OK):
    responseJSON = dict({
        "status": status_code,
        "data": {"message":data},
    })
    return responseJSON
    

class JobPost(APIView):
    def post(self,request):
        print("**********Post data************")
        message = request.data;
        print("*******************Request data from FrontEnd::",message)
        serializer = PostSerializer(data=message)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print("*******************ERROR",serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def get(self,request):
    #     print("********************************",request.get('adv_no',None))
    #     return Response("hello")

@api_view(['GET'])
def getAdvNo(request,*args,**kwargs):
    advertisement_no = kwargs.get('adv_no')
    print("********************************advertisement::",advertisement_no)
    if advertisement_no == None or advertisement_no=="":
        return Response('valid advertisement',status.HTTP_200_OK)
    query_set = Post.objects.filter(adv_no=advertisement_no)
    print("********************************::",query_set)
    if query_set.exists():
        print("********************************",query_set)
        return Response(commonResponse('Name already exists',status.HTTP_400_BAD_REQUEST))
    return Response('valid advertisement',status.HTTP_200_OK)
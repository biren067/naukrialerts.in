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
            print(":::=>",serializer.data)
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


# @api_view(['GET'])
# def getJobInfo(request, link_post_name, *args, **kwargs):
#     query_set = Post.objects.filter(link_post_name=link_post_name)
#     print("********query_set",query_set)
#     serializer = PostSerializer(query_set, many=True)  # Use many=True if queryset can have multiple objects
#     if serializer.data:
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def getJobInfo(request, *args, **kwargs):
    # print("******kwargs",kwargs, request.query_params,type(request.query_params))
    if not request.query_params:
        query_set = Post.objects.all()
    else:
        link_post_name = request.query_params.get('link_post_name')
        query_set = Post.objects.filter(link_post_name=link_post_name)
    # print("********query_set",query_set,link_post_name)
    serializer = PostSerializer(query_set, many=True)  # Use many=True if queryset can have multiple objects
    if serializer.data:
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def getJobDetails(request, link_post_name,*args, **kwargs):
    query_set = Post.objects.filter(link_post_name=link_post_name)
    serializer = PostSerializer(query_set, many=True)  # Use many=True if queryset can have multiple objects
    if serializer.data:
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def getJobDetailsPk(request, pk,*args, **kwargs):
    print("********************************",pk)
    query_set = Post.objects.get(id=pk)
    serializer = PostSerializer(query_set)  # Use many=True if queryset can have multiple objects
    if serializer.data:
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
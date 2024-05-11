from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view
import random
from datetime import datetime, timedelta

import string

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


@api_view(['GET'])
def getStateAndCategory(request,*args, **kwargs):
    state = request.query_params.get('state')
    categories = request.query_params.get('categories')
    pageNumber = request.query_params.get('pagenumber')
    pageSize = request.query_params.get('pageSize')
    if not pageNumber:
        pageNumber = 10
    print("state::",state)
    print("categories::",categories)
    print("pageNumber::",pageNumber)
    print("pageSize::",pageSize)
    return Response({"message":"fine"},status=status.HTTP_200_OK)



@api_view(['GET'])
def storeJobRandom(request,records,*args, **kwargs):
    categories= ['agriculture', 'banking','defence', 'engineering', 'insurance', 'judiciary', 'teaching', 'uPSC', 'railways', 'state SSC', 'nEET', 'miscelleneous',]
    states_union_territories = [   'andhra pradesh',
    'arunachal pradesh','assam',
    'bihar','chhattisgarh',
    'delhi','goa',
    'gujarat','haryana',
    'himachal Pradesh',
    'jharkhand','karnataka',
    'kerala','Mmadhya pradesh',
    'maharashtra','manipur',
    'meghalaya','mizoram',
    'nagaland','odisha',
    'punjab','rajasthan',
    'sikkim','tamil nadu',
    'telangana','tripura',
    'uttar pradesh','uttarakhand',
    'west bengal','andaman and nicobar islands',
    ]
    def generate_random_string(min_words, max_words):
        num_words = random.randint(min_words, max_words)
        random_words = [random.choice(words) for _ in range(num_words)]
        random_string = ' '.join(random_words)
        return random_string

    def generate_random_strings(n, min_words, max_words):
        random_strings = [generate_random_string(min_words, max_words) for _ in range(n)]
        statement = ' '.join(random_strings)
        return statement
    # request.data
    number_of_records = records if records else 5
    print("*******",records,number_of_records)
    lst = list()
    for num in range(number_of_records):
        random_state = random.choice(states_union_territories)
        random_categories = random.choice(categories)
        
        current_date = datetime.now()
        end_date = current_date + timedelta(days=60)  # Adding 60 days to get the date 2 months from now
        random_date = current_date + timedelta(days=random.randint(0, (end_date - current_date).days))
        random_date =  random_date.strftime("%Y-%m-%d")


        words = ["apple", "banana", "orange", "grape", "kiwi", "peach", "pear", "melon", "pineapple", "strawberry"]


        # Example usage:
        n = 5  # Number of random statements
        min_words = 9  # Minimum number of words per statement
        max_words = 20  # Maximum number of words per statement
        random_statements = generate_random_strings(n, min_words, max_words)
        print("**********",random_statements,type(random_statements))
        string_with_hyphens = random_statements.replace(" ", "-")
        string_with_hyphens = string_with_hyphens[:50]
        string_with_hyphens = string_with_hyphens[0:string_with_hyphens.rfind("-")]
        end = 50 if len(random_statements)>50 else len(random_statements)
        post_name = random_statements[:end]
        dt = dict()
        dt['adv_no'] = 'ADV_NO_'+str(random.randint(1,1000))
        
        dt['post_name'] = post_name
        dt['link_post_name'] = post_name.replace(" ","-")
        dt['category_name'] = random_categories
        dt['sub_category_name'] = random.choice(words)
        dt['state_ut'] = random_state
        
        dt['post_date'] = random_date
        dt['short_desc'] = random_statements
        dt['total_vacancy'] = 549
        dt['gen_fees'] = 300
        dt['others_fees'] = 200
        dt['ph_fees'] = 50
        dt['app_begin_date'] = random_date
        dt['app_last_date'] = random_date
        dt['app_last_fees_date'] = random_date
        dt['exam_date'] = random_date
        dt['prelim_exam_date'] = random_date
        dt['main_exam_date'] = random_date
        dt['interview_exam_date'] = random_date
        dt['result_exam_date'] = random_date
        dt['general_vacancy'] = 300
        dt['obc_vacancy'] = 300
        dt['sc_vacancy'] = 300
        dt['st_vacancy'] = 300
        dt['age_info'] = 'birendra kumar'
        dt['max_age'] = 30
        dt['min_age'] = 30
        dt['relaxation'] = 30
        dt['education'] = "MCA Graduate"
        dt['detail_desc'] = 'not availagle'
        dt['apply_online'] = 'https://www.google.com'
        dt['official_website'] = 'https://www.google.com'
        dt['app_notifications'] = 'https://www.google.com'
        dt['medical_std '] = 'perfect eye sites'
        lst.append(dt)

    for row in lst:
        serializer = PostSerializer(data=row)
        if serializer.is_valid():
            serializer.save()
            # print(":::=>",serializer.data)
            # return Response(serializer.data)
        else:
            print("*******************ERROR",serializer.errors)
            # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    print("dictionary::",lst)
    totalRecords = Post.objects.all().count()
    return Response({"message":"Stored"+str(totalRecords)}, status=status.HTTP_200_OK)

@api_view(['GET'])
def getStateAndCategoryPaginations(request,*args, **kwargs):
    pageSize = request.GET.get('pageSize', 10)  # Default page size is 10
    pageNumber = request.GET.get('pageNumber', 1)  # Default page number is 1
    pageSize = int(pageSize)
    pageNumber = int(pageNumber)

    state = request.query_params.get('state')
    categories = request.query_params.get('categories')
    # state = request.query_params.get('state')
    # categories = request.query_params.get('categories')
    # if not pageSize:
    #     pageSize = 1
    # if not pageNumber:
    #     pageNumber = 1
    if state and categories:
        query_set = Post.objects.filter(state_ut=state, category_name=categories)
    elif state:
        query_set = Post.objects.filter(state_ut=state)
    elif categories:
        query_set = Post.objects.filter(category_name=categories)
    else:
        query_set = Post.objects.all()
    print("pageSize:",type(pageSize),pageSize)
    print("pageNubmer:",type(pageNumber),pageNumber)
    startPage = pageSize  * (pageNumber - 1)
    endPage = startPage + pageSize
    

    endPage = pageSize if len(query_set) >= pageSize else len(query_set)
    print("First Query Set",query_set,startPage,endPage)
    slice_query_set = query_set[startPage:endPage]
    print("slice_query_set",slice_query_set)
    serializer = PostSerializer(slice_query_set, many=True)    
    if serializer.data:
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({"message":"Not found"}, status=status.HTTP_200_OK)

    # print("state::",state)
    # print("categories::",categories)
    # print("pageNumber::",pageNumber)
    # print("pageSize::",pageSize)
    # return Response({"message":"fine"},status=status.HTTP_200_OK)

# @api_view(['GET'])
# def storeRandom(request,*args, **kwargs):
#     categories= [
#    'agriculture',
#    'banking',
#    'defence',
#    'engineering',
#    'insurance',
#    'judiciary',
#    'teaching',
#    'uPSC',
#    'railways',
#    'state SSC',
#    'nEET',
#    'miscelleneous',
# ]
#     states_union_territories = [
#       'andhra pradesh',
#    'arunachal pradesh',
#    'assam',
#    'bihar',
#    'chhattisgarh',
#    'delhi',
#    'goa',
#    'gujarat',
#    'haryana',
#    'himachal Pradesh',
#    'jharkhand',
#    'karnataka',
#    'kerala',
#    'Mmadhya pradesh',
#    'maharashtra',
#    'manipur',
#    'meghalaya',
#    'mizoram',
#    'nagaland',
#    'odisha',
#    'punjab',
#    'rajasthan',
#    'sikkim',
#    'tamil nadu',
#    'telangana',
#    'tripura',
#    'uttar pradesh',
#    'uttarakhand',
#    'west bengal',
#    'andaman and nicobar islands',
# ]
#     random_state = random.choice(states_union_territories)
#     print("Random state:", random_state)

#     random_categories = random.choice(categories)
#     print("Random categories:", random_categories)

#     current_date = datetime.now()
#     end_date = current_date + timedelta(days=60)  # Adding 60 days to get the date 2 months from now

#     random_date = current_date + timedelta(days=random.randint(0, (end_date - current_date).days))
#     random_date =  random_date.strftime("%Y-%m-%d")

# # List of words to generate random strings
#     words = ["apple", "banana", "orange", "grape", "kiwi", "peach", "pear", "melon", "pineapple", "strawberry"]

#     def generate_random_string(min_words, max_words):
#         # Generate a random number of words between min_words and max_words
#         num_words = random.randint(min_words, max_words)
        
#         # Choose random words from the list 'words'
#         random_words = [random.choice(words) for _ in range(num_words)]
        
#         # Join the words into a single string
#         random_string = ' '.join(random_words)
        
#         return random_string

#     def generate_random_strings(n, min_words, max_words):
#         # Generate n random strings
#         random_strings = [generate_random_string(min_words, max_words) for _ in range(n)]
        
#         # Join all strings into a single statement
#         statement = '\n'.join(random_strings)
        
#         return statement

#     # Example usage:
#     n = 5  # Number of random statements
#     min_words = 9  # Minimum number of words per statement
#     max_words = 20  # Maximum number of words per statement

#     random_statements = generate_random_strings(n, min_words, max_words)
#     print(random_statements)

#     string_with_hyphens = random_statements.replace(" ", "-")

#     return Response({"message":{"state":random_state,"categoies":random_categories,"date":random_date,"random_string":random_statements,"link":string_with_hyphens}}, status=status.HTTP_200_OK)

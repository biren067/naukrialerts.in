from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.Serializer):
    adv_no = serializers.CharField(max_length=200)
    post_name = serializers.CharField(max_length=500)
    category_name = serializers.CharField(max_length=200)
    state_ut = serializers.CharField(max_length=100)
    sub_category_name = serializers.CharField(max_length=200,required=False,allow_null=True)
    post_date = serializers.DateField()
    short_desc = serializers.CharField()
    total_vacancy = serializers.IntegerField()
    gen_fees = serializers.IntegerField()
    others_fees = serializers.IntegerField(required=False,allow_null=True)
    ph_fees = serializers.IntegerField(required=False,allow_null=True)
    
    def create(self, validated_data):
        return Post.objects.create(**validated_data)
    


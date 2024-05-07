from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.Serializer):
    adv_no = serializers.CharField(max_length=200)
    post_name = serializers.CharField(max_length=500)
    link_post_name = serializers.CharField(max_length=500)
    category_name = serializers.CharField(max_length=200)
    state_ut = serializers.CharField(max_length=100)
    sub_category_name = serializers.CharField(max_length=200,required=False,allow_null=True)
    post_date = serializers.DateField(required=False,allow_null=True)
    short_desc = serializers.CharField()
    total_vacancy = serializers.IntegerField(required=False,allow_null=True)
    gen_fees = serializers.CharField(max_length=100, required=False,allow_null=True)
    others_fees = serializers.CharField(max_length=100, required=False,allow_null=True)
    ph_fees = serializers.CharField(max_length=100, required=False,allow_null=True)
    app_begin_date = serializers.DateField()
    app_last_date = serializers.DateField()
    app_last_fees_date= serializers.DateField(required=False,allow_null=True)
    exam_date=serializers.DateField(required=False,allow_null=True)
    prelim_exam_date=serializers.DateField(required=False,allow_null=True)
    main_exam_date=serializers.DateField(required=False,allow_null=True)
    interview_exam_date=serializers.DateField(required=False,allow_null=True)
    result_exam_date=serializers.DateField(required=False,allow_null=True)
    general_vacancy=serializers.IntegerField(required=False,allow_null=True)
    obc_vacancy=serializers.IntegerField(required=False,allow_null=True)
    sc_vacancy=serializers.IntegerField(required=False,allow_null=True)
    st_vacancy=serializers.IntegerField(required=False,allow_null=True)
    age_info=serializers.CharField(max_length=200, required=False,allow_null=True)
    max_age=serializers.IntegerField(required=False,allow_null=True)
    min_age=serializers.IntegerField(required=False,allow_null=True)
    relaxation=serializers.IntegerField(required=False,allow_null=True)
    education=serializers.CharField(max_length=500, required=False,allow_null=True)
    detail_desc=serializers.CharField(required=False,allow_null=True)
    apply_online=serializers.CharField(required=False,allow_null=True)
    official_website=serializers.CharField(required=False,allow_null=True)
    app_notifications=serializers.CharField(required=False,allow_null=True)
    medical_std =serializers.CharField(required=False,allow_null=True)
    
    def create(self, validated_data):
        return Post.objects.create(**validated_data)
    


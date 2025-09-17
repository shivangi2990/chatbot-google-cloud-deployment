from django.http import JsonResponse

def bot_reply(request):
    user_message = request.GET.get("message", "")
    if user_message[-1] == "?":
        reply = f"You asked: {user_message} to the bot"
    else:
        reply = f"You said: {user_message} to the bot"  # simple echo bot
    return JsonResponse({"reply": reply})
